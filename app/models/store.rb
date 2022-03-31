class Store < ApplicationRecord
  belongs_to :user
  has_many :products, dependent: :destroy
  has_many :sales, dependent: :destroy
  has_many :customers, dependent: :destroy

  validates :store_name, presence: true
  validates :address, presence: true
end
