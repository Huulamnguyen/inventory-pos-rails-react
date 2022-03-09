class Store < ApplicationRecord
  belongs_to :user
  has_many :products, dependent: :destroy

  validates :store_name, presence: true
  validates :address, presence: true
end
