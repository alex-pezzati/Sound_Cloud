"""empty message

Revision ID: dbab45172273
Revises: 571c0cff72b2
Create Date: 2021-03-23 06:29:00.992071

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dbab45172273'
down_revision = '571c0cff72b2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('songs',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('user_id', sa.INTEGER(), nullable=True),
    sa.Column('artist', sa.String(length=50), nullable=True),
    sa.Column('name', sa.String(length=50), nullable=False),
    sa.Column('url', sa.String(length=255), nullable=False),
    sa.Column('duration', sa.String(length=255), nullable=True),
    sa.Column('cover_image', sa.String(length=255), nullable=True),
    sa.Column('genre', sa.String(length=255), nullable=True),
    sa.Column('description', sa.TEXT(), nullable=True),
    sa.Column('release_date', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('songs')
    # ### end Alembic commands ###
