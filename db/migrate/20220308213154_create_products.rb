class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.string :image
      t.integer :inventory
      t.float :retail_price
      t.string :SKU
      t.belongs_to :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
