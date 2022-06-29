class ClientsController < ApplicationController

  # def index
  #   @client = @data.App(data),
  #   @client = Clients.all
  # end

  def show
    @client = Clients.find(params[:pseudo, :nom])
  end

end
