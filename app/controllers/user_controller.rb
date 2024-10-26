class UserController < ApplicationController
    before_action :authenticate_user!
    def update
        if current_user.update(user_params)
            if current_user.update(user_params)
                render json: {status: 'success' , data: current_user}
            else
                render json: {status: 'error', error: current_user.errors.full_messages}
            end
        end
    end

    private

    def user_params
        params.permit(:name , :nickname , :email , :image)
    end

end
