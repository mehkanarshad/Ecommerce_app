class UserController < ApplicationController
    before_action :authenticate_user!
    def update
        if current_user.update(user_params)
            image_url = current_user.image.attached? ? url_for(current_user.image) : nil
            render json: {status: 'success', data: current_user.as_json.merge(image_url: image_url)}
        else
            render json: {status: 'error', error: current_user.errors.full_messages}
        end
    end
    
   
    def profile
        image_url = current_user.image.attached? ? url_for(current_user.image) : nil
        render json: {
          status: 'success',
          data: current_user.as_json.merge(image_url: image_url)
        }
      end
    private

    def user_params
        params.permit(:name , :nickname , :email , :image)
    end

end
