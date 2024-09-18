<?php
namespace Project\Controllers;

use \Core\Controller;
use \Project\Models\User;

class UserController extends Controller 
{

    /**
     * Регистрирует нового пользователя.
     *
     * Проверяет, что все обязательные поля заполнены, и затем пытается зарегистрировать пользователя.
     *
     * @param string $username Имя пользователя.
     * @param string $email Адрес электронной почты пользователя.
     * @param string $password Пароль пользователя.
     *
     * @return array Массив с результатом регистрации. Содержит либо сообщение об ошибке, либо сообщение об успешной регистрации.
     */
    public function register($username, $email, $password, $password_suc) 
    {
        if (empty($username) || empty($email) || empty($password)) {
            return ['error' => 'All fields are required'];
        }

        if ($password !== $password_suc) {
            return ['error' => 'Passwords dont match'];
        }

        if ($this->userModel->register($username, $email, $password)) {
            return ['success' => 'Registration successful'];
        } else {
            return ['error' => 'Registration failed'];
        }
    }

    public function login($email, $password)
    {
        if (empty($email) || empty($password)) {
            return ['error' => 'All fields are required'];
        }

        if ($this->userModel->login($email, $password)) {
            return ['success' => 'Login successful'];
        } else {
            return ['error' => 'Login failed'];
        }
    }
}
