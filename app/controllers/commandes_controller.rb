class CommandesController < ApplicationController

  def new
    @commandes = Commande.all
    render json: @commandes
  end
end
