class Api::V1::CoursController < ApplicationController
  before_action :se_cour, only: [:show, :index]



  def index
    @cours = Cour.all.order(package: :asc)
    render json: @cours
  end

  def show

    if @cour
      render json: @cour
    else
      render json: @cour.errors
    end
  end


  def set_cour
    @cour = Cour.find(params[:id])
  end
end
