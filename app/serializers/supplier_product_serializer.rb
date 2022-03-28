class SupplierProductSerializer < ActiveModel::Serializer
  attributes :id
  has_one :product
  has_one :supplier
end
