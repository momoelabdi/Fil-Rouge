class ClientsController < ApplicationController

  def new
    @clients = Client.all
    render json: @clients
  end

  # def show
  #   # @client = Clients.find(params[:pseudo, :nom])
  # end
end
