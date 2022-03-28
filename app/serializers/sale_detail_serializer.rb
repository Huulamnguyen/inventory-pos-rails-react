class SaleDetailSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :product
  has_one :product
  has_one :sale

end
