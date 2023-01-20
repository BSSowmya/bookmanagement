require 'bcrypt'
class UserController < ApplicationController
    skip_before_action :verify_authenticity_token
def index
current_user = User.find_by_id(session[:current_user_id])
render json: current_user
end


def show
    bol = User.exists?(params[:id])
    if bol
        v = User.find(params[:id])
        render json:v
    else
        render json: "User not found."
    end
end

def create
    v = !params[:u_name] and !params[:u_email] and !params[:password]
    puts params[:password]
    if !v
        u = User.create('u_email': params[:u_email],'u_name': params[:u_name],'password': params[:password])
    render json: "User account created"
    else
        render json: "User details incorrect, account not created"
    end
end

def update
    bol = User.exists?(params[:id])
    if bol
        u = User.find_by_id(params[:id])
        u.update('u_email': params[:u_email],'u_name': params[:u_name],'password': params[:password])
        render json: "User account details updated"
    else
        render json: "User account not found"
    end
end

def destroy
    bol = User.exists?(params[:id])
    if bol
        u = User.find_by_id(params[:id])
        u.destroy
        render json: "User account deleted"
    else
        render json: "User account not found"
    end
end
end
