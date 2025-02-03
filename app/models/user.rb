class User < ApplicationRecord
  include DeviseTokenAuth::Concerns::User
    devise :database_authenticatable, :registerable,
      :recoverable, :rememberable, :trackable, :validatable,
      :confirmable, :omniauthable
    has_one_attached :image

#   def logged_in
#     render json: { logged_in: true }
#   end
  enum role: { admin: 'admin', seller: 'seller', customer: 'customer'}
  validates :role, inclusion: {in: roles.keys}

  after_initialize :set_default_role , if: :new_record?

  def set_default_role
    self.role ||= "customer"
  end

  def confirmation_required?
    false if Rails.env.development?
  end

  def image_url
    Rails.application.routes.url_helpers.rails_blob_url(image, only_path: true) if image.attached?
  end

end
