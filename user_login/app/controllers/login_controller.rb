require 'bcrypt'
class LoginController < ApplicationController
    skip_before_action :verify_authenticity_token
def index
    current_user = User.find_by_id(session[:current_user_id])
    render json: current_user
end

  def create
    u = User.find_by('u_email': params[:u_email])
    if u.nil?
        render json:"User account not found"
    else 
        if u.authenticate(params[:password])
            session[:current_user_id] = u.id
            render json: "Logged in successfully"
        else
            render json: "Authentication failed"
        end
  end
end

def destroy
    session.delete(:current_user_id)
    render json: "Logged out successfully"
end

end
