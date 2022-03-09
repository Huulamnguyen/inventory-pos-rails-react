class Product < ApplicationRecord
  belongs_to :store

  validates :title, presence: true
  validates :inventory, presence: true, numericality: { greater_than_or_equal_to: 0}
  validates :retail_price, presence: true, numericality: { greater_than_or_equal_to: 0}

end
