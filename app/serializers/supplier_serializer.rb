class SupplierSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :phone, :email
  has_many :products
end
