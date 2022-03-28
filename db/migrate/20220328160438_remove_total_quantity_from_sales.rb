class RemoveTotalQuantityFromSales < ActiveRecord::Migration[6.1]
  def change
    remove_column :sales, :total_quantity, :integer
  end
end
