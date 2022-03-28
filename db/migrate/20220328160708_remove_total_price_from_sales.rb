class RemoveTotalPriceFromSales < ActiveRecord::Migration[6.1]
  def change
    remove_column :sales, :total_price, :float
  end
end
