class CoursController < ApplicationController

  def index
    @cours = Cour.all
    render json: @cours
  end

  def show
    # if @cours
    #   render json: @cours
    # else
    #   render json: @cours.errors
    # end
  end
end
