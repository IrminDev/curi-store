<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void{
        DB::statement($this->createView());
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void{
        DB::statement($this->dropView());
    }

    private function createView(): string{
        return <<<SQL
        CREATE VIEW cartInfo AS
        SELECT users.id, carts.product_id, products.price * carts.quantity as total, products.title, products.price, carts.quantity
        FROM users
        JOIN carts ON users.id = carts.user_id
        JOIN products ON carts.product_id = products.id
        SQL;
    }

    private function dropView(): string{
        return <<<SQL
        DROP VIEW IF EXISTS cartInfo
        SQL;
    }
};
