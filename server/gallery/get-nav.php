<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST');
header('Content-Type:application/json');
include '../database/Database.php';

$obj = new Database();

if ($_SERVER["REQUEST_METHOD"] == 'GET') {
    try {
        $data = json_decode(file_get_contents("php://input"));

        $obj->select('products', "DISTINCT work", null, null, null, null);
        $products = $obj->getResult();
        if ($products) {
            http_response_code(200);
            echo json_encode([
                'status' => 1,
                'message' => $products,
            ]);
        } else {
            http_response_code(500);
            echo json_encode([
                'status' => 0,
                'message' => "server problem",
            ]);
        }
    } catch (Exception $e) {
        http_response_code(404);
        echo json_encode([
            'status' => 0,
            'message' => $e->getMessage(),
        ]);
    }
} else {
    http_response_code(404);
    echo json_encode([
        'status' => 0,
        'message' => 'Access Denied',
    ]);
}