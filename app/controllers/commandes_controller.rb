class CommandesController < ApplicationController
  before_action :set_commande, only: [:index, :new, :create, :destroy, :update]
  skip_before_action :verify_authenticity_token

  def index
    @commandes = Commande.all
    render json: @commandes
  end

  def new
    @commandes = Commande.new
  end

  def create
    @commandes = Commande.new(commandes_params)
    if @commandes.save
      render json: @commandes
    else
      render json: @commandes.errors
    end
  end

  def update

  end

  def destroy
    @commandes.destroy

    render json: { notice: 'Your booking was successfully canceled.' }
  end

  private

  def set_commande
    # @commandes = Commande.find(params[:id])
  end

  # def client_params
  #   params.permit(:nom, :mail, :client_id)
  # end

  def commandes_params
    params.permit([:client_name, :client_email, :check_in, :check_out])
  end
end
