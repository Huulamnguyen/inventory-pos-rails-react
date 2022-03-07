class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :address, :email, :phone
  has_many :stores
end
