class AddStoreIdToCustomers < ActiveRecord::Migration[6.1]
  def change
    add_column :customers, :store_id, :integer
  end
end
