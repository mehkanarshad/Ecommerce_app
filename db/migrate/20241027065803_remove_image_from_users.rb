# frozen_string_literal: true

class RemoveImageFromUsers < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :image, :string
  end
end
