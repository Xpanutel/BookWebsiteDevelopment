<?php
namespace Core;

class Model {
    private static $link;

    public function __construct() {
        if (!self::$link) {
            self::$link = new PDO('pgsql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS);
        }
    }

    protected function findOne($query) {
        $stmt = self::$link->prepare($query);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    protected function findMany($query) {
        $stmt = self::$link->prepare($query);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

