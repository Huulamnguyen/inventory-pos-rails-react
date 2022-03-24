class CreateBrandProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :brand_products do |t|
      t.belongs_to :product, null: false, foreign_key: true
      t.belongs_to :brand, null: false, foreign_key: true

      t.timestamps
    end
  end
end
