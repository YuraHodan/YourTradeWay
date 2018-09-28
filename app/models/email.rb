class Email < ActiveRecord::Base
  scope :confirmend_emailss, -> {where(send_email: true)}
end
