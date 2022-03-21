class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image, :inventory, :retail_price, :SKU
  has_one :store
  has_many :categories
end
