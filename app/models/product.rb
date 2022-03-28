class Product < ApplicationRecord
  # Association with Store Model
  belongs_to :store
  
  # Association with Category Model
  has_many :category_products, dependent: :destroy
  has_many :categories, through: :category_products

  # Association with Brand Model
  has_many :brand_products
  has_many :brands, through: :brand_products

  # Association with Supplier Model
  has_many :supplier_products
  has_many :suppliers, through: :supplier_products

  validates :title, presence: true
  validates :inventory, presence: true, numericality: { greater_than_or_equal_to: 0}
  validates :retail_price, presence: true, numericality: { greater_than_or_equal_to: 0}

end
