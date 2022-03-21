class CategoryProductSerializer < ActiveModel::Serializer
  attributes :id, :product, :category.name
  has_one :category
  has_one :product
end
