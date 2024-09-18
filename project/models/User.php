<?php
namespace Project\Models;

use \Core\Model;

/**
 * Класс User управляет пользовательскими данными и функционалом
 * для регистрации и авторизации.
 */
class User extends Model
{
    /**
     * Регистрация нового пользователя.
     *
     * @param string $username Имя пользователя.
     * @param string $email Адрес электронной почты пользователя.
     * @param string $password Пароль пользователя.
     * @return bool Возвращает true, если регистрация успешна, иначе false.
     */
    public function register($username, $email, $password) 
    {
        // Хэширование пароля
        $passwordHash = password_hash($password, PASSWORD_BCRYPT);
    
        try {
            // подготовка sql запроса 
            $stmt = $this->link->prepare('INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)');
            // выполнение sql запроса
            $result = $stmt->execute([$username, $email, $passwordHash]);
    
            return true;
        } catch (PDOException $e) {
            echo 'Ошибка: ' . $e->getMessage();
            return false;
        }
    }
    

    /**
     * Авторизация пользователя по адресу электронной почты и паролю.
     *
     * @param string $email Адрес электронной почты пользователя.
     * @param string $password Пароль пользователя.
     * @return bool Возвращает true, если пароль совпадает с хэшем в базе данных, иначе false.
     */
    public function login($email, $password) 
    {
        // Подготовка SQL-запроса для получения хэша пароля
        $stmt = pg_prepare(self::$link, "login_query", "SELECT password_hash FROM users WHERE email = $1");
        // Выполнение SQL-запроса
        $result = pg_execute(self::$link, "login_query", array($email));
        
        if ($result) {
            $row = pg_fetch_assoc($result);
            if ($row) {
                // Проверка совпадения пароля
                return password_verify($password, $row['password_hash']);
            }
        }
        
        return false;
    }
}
