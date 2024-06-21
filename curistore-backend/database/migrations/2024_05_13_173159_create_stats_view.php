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
        CREATE VIEW stats_view AS
        SELECT products.id, products.title, SUM(orders.quantity) as total, SUM(orders.quantity * products.price) as earnings, products.brand_id, products.category_id, brands.name as brand, categories.name as category
        FROM products INNER JOIN orders ON products.id = orders.product_id
        INNER JOIN brands ON products.brand_id = brands.id
        INNER JOIN categories ON products.category_id = categories.id
        GROUP BY products.id, products.title, products.brand_id, products.category_id, brands.name, categories.name
        SQL;
    }

    private function dropView(): string{
        return <<<SQL
        DROP VIEW IF EXISTS stats_view
        SQL;
    }
};
