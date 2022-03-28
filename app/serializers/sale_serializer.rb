class SaleSerializer < ActiveModel::Serializer
  attributes :id, :tax, :total_quantity, :total_price, :tax_amount, :total_amount
  has_one :store
  # has_many :products
  has_many :sale_details

  def total_quantity
    "#{object.sale_details.sum(:quantity)}"
  end

  def total_price
    "#{
      object.sale_details.map do |sale_detail|
        sale_detail.quantity * sale_detail.product.retail_price
      end.sum
    }"
  end
  
  def tax_amount
    "#{self.total_price.to_f * object.tax}"
  end

  def total_amount
    "#{self.total_price.to_f + self.tax_amount.to_f}"
  end

end
