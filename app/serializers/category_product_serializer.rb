class CategoryProductSerializer < ActiveModel::Serializer
  attributes :id, :product
  has_one :category
  has_one :product
end
