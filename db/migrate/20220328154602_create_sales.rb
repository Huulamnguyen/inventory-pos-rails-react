class CreateSales < ActiveRecord::Migration[6.1]
  def change
    create_table :sales do |t|
      t.integer :total_quantity
      t.float :total_price
      t.float :tax
      t.belongs_to :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
