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
        CREATE VIEW userOrders AS
        SELECT users.id, purchases.id as purchase_id, SUM(products.price * orders.quantity) as total, addresses.address, addresses.city, addresses.state, addresses.zip
        FROM users
        JOIN purchases ON users.id = purchases.user_id
        JOIN addresses ON purchases.address_id = addresses.id
        JOIN orders ON purchases.id = orders.purchase_id
        JOIN products ON orders.product_id = products.id
        GROUP BY users.id, purchases.id, addresses.address, addresses.city, addresses.state, addresses.zip
        SQL;
    }

    private function dropView(): string{
        return <<<SQL
        DROP VIEW IF EXISTS stats_view
        SQL;
    }
};
