class BookController < ApplicationController
 skip_before_action :verify_authenticity_token
def index
current_user = User.find_by_id(session[:current_user_id])
if !current_user.nil?
    b = Book.all
    render json: b
else
    render json: "Please login to see book list"
end
end    

def show
    current_user = User.find_by_id(session[:current_user_id])
    if !current_user.nil?
    bol = Book.exists?(params[:id])
    if bol
    v = Book.find(params[:id])
    render json:v
    else
    render json: "false"
    end
    else
    render json: "Please login to see book list"
    end
end

def create
 current_user = User.find_by_id(session[:current_user_id])
if !current_user.nil?
    v = !params[:b_name] and !params[:b_auth] and !params[:b_quantity]
    puts params[:bookname]
    if !v
    b = Book.create('b_name': params[:b_name],'b_auth': params[:b_auth],'b_quantity': params[:b_quantity])
    render json: "true"
    else 
    render json: "false"
    end
else
    render json: "false"
end   

end

def update
 current_user = User.find_by_id(session[:current_user_id])
if !current_user.nil?
    b = Book.all
    bol = Book.exists?(params[:id])
    if bol
        b = Book.find_by_id(params[:id])
        b.update('b_name': params[:b_name],'b_auth': params[:b_auth],'b_quantity': params[:b_quantity])
        render json: "true"
    else
        render json: "false"
    end
else
    render json: "false"
end
end

def destroy
    current_user = User.find_by_id(session[:current_user_id])
    if !current_user.nil?
        bol = Book.exists?(params[:id])
        if bol
             b = Book.find_by_id(params[:id])
            b.destroy
            render json: "true"
        else
            render json: "false"
        end
    else
        render json: "Please login to delete the book"
    end
end

end
