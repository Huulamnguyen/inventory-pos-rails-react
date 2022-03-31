class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :address, :phone
  has_many :sales
  has_one :store
end
