class User < ApplicationRecord
has_secure_password
validates :u_name,:u_email,:password,presence: true    
end
