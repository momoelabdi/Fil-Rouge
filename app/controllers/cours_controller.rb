class CoursController < ApplicationController

  def index
    @cours = Cour.all
    render json: @cours
  end

#   def show
#     if @cours
#       render json: @cours
#     else
#       render json: {notice: 'check our home page for more informations about our current offers'}
#     end
#   end
end
