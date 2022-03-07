class CreateStores < ActiveRecord::Migration[6.1]
  def change
    create_table :stores do |t|
      t.string :store_name
      t.string :address
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
