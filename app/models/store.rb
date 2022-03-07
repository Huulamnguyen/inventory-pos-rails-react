class Store < ApplicationRecord
  belongs_to :user

  validates :store_name, presence: true
  validates :address, presence: true
end
