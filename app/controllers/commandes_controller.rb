class CommandesController < ApplicationController

  def index
    @commandes = Commande.all
    # redirect_to cour_commandes_path
    render json: @commandes
  end

  def new
    @commades = Commande.new
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

  def destroy
    @commandes.destroy

    render json: { notice: 'Your booking was successfully canceled.' }
  end

  def commandes_params
    params.permit(:client_name, :client_email, :cour_id, :check_in, :check_out)
  end
end
