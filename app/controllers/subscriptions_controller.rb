class SubscriptionsController < ApplicationController
  def index
    @subscription = Subscription.new
  end
  def new
    @subscription = Subscription.new
  end
  def create
    @subscription = Subscription.new(subscripton_params)
    if @subscription.save
      flash[:notice] = "Post successfully created"
      redirect_to root_url
    else
      flash[:notice] = "Email already taken / Not a vaild email"
      redirect_to root_url
    end
  end

  private
  def subscripton_params
    params.require(:subscription).permit(:email,:first_name, :last_name)
  end
end
