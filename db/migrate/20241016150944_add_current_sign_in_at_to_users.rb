class AddCurrentSignInAtToUsers < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :current_sign_in_at, :datetime
  end
end
