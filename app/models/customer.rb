class Customer < ApplicationRecord
    has_many :sales
    belongs_to :store

    validates :first_name, presence: true
    validates :last_name, presence: true
end
