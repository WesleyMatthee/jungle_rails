class Admin::CategoriesController < ApplicationController

  def index
    @categories = Caterory.order(id: :desc).all
  end


  #gets the html form
  def new
    @catergory = Caterory.new
  end


  #post req to database
  def create
    @catergory = Caterory.new(catergory_params)

    if @catergory.save
      redirect_to [:admin, :categories], notice: 'Caterory created!'
    else
      render :new
    end
  end

  private

  def product_params
    params.require(:catergory).permit(
      :name
    )
  end

end
