class Sale < ApplicationRecord
  belongs_to :store

  has_many :sale_details
  has_many :products, through: :sale_details
end
