class BrandProductSerializer < ActiveModel::Serializer
  attributes :id
  has_one :product
  has_one :brand
end
