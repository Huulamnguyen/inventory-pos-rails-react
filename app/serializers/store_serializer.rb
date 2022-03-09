class StoreSerializer < ActiveModel::Serializer
  attributes :id, :store_name, :address
  has_one :user
  has_many :products
end
