class CommandesController < ApplicationController

  def new
    @commandes = Commande.all
    render json: @commandes
  end

  def create
    @commandes = Commande.new(commandes_params)
    @cours = Cour.find(params [:cours_id])
    if @commandes.save
      render json: @commandes
    else
      render json: @commandes.errors
    end
  end

  def commandes_params
    params.permit(:cour_id, :client_id, :date_de_reservation, :payement)
  end

end
